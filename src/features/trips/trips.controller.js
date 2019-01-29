import TRIPS from "./trips.model"
import { cleanResponse } from "../../helpers/resonses";
import _c from "../../config/chalking";
import E from "../../config/errora";
// add trips to database
const addTrips = (req, res, next) {

// extract data from body afet parse it using bodyParser
	const {data} = req.body

	const newTrip = new Trips()

	// assign values to object which it will save as database doc
	newTrip = {
		title: data.title,
		type: data.type,
		note: data.note,
		place: data.place,
		status: data.status,
		date: {
			from: data.from,
			to: data.to,
		},
		sby: data.sby,
		travelers: data.travelers,
		by: data.by,
	}

	// save to database
	newTrip.save().then(trip => {
		console.log(_c.bgreen(trip))

		cleanResponse(res, {code: 200, msg:"مبروك لقد قمت باضافة رحلة جديدة"})
	}).catch(err => {
		console.log(_c.error(err))
		next(err)
	})


}


// edit trips
const editTrip = (req, res, next) {
	const  {id} = req.params
	const  {data} = req.body


	// edit one
	TRIPS.findByIdAndUpdate(id,data)
		.then(trip => {
			console.log(trip)
			cleanResponse(res, {code:200, msg:"لقد قمت بتعديل هذا الكائن الحي"})
		})
		.catch(err => {
			console.log(_c.error(err))
			next(err)
		})

}

// delete trips
const deleteTrip = (req, res, next) {

		const {id} = req.params

		TRIPS.findByIdAndDelete(id)
			.then(trip => {
				console.log(trip)
			})
			.catch(err => {
				console.log(_c(err))
				next(err)
			})
}


// show trips
const getTrips = (req, res, next) {

	const {trips_ui,l,p} = req.query
	// paginattion thin
	const skip= l*(p-1)

	const {id} = req.params
	const data = {}
	// get data for tables
	if(trips_ui == "tableShow"){
		TRIPS.find({},{},{ skip,limit: parseInt(l) })
			.then(trips => {
				data.trips = trips
				return TRIPS.countDocuments()
			})
			.then(counts => {
				data.pages = counts
				cleanResponse(res, {code: 200, msg: "لقد قمت بجلب الرحلات ", data})
			})
			.catch(err => {
				console.log(_c.error(err))
				next(err)
			})
	}eles{
		// tripShow
		TRIPS.findById(id)
			.then(trip =>  {
				data.trip = trip
				cleanResponse(res, { code: 200, msg: "لقد قمت بجلب الرحلات ", data })
			})
			.catch(err => {
				console.log(_c.error(err))
				next(err)
			})

	}
	const err = new E('لتحاول تصير سمير عفية',{status: 404})
	// if it is scape the constion
	next(err)
}


export default { addTrips ,deleteTrip ,editTrip , getTrips }
