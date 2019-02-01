import joi from 'joi';

const str = joi.string();
const ary = joi.array();
const inter = ['جيد', 'سيء', 'متوسط', 'مقبول'];

export const getallCourses = {
  query: {
    p: joi.number().required(),
    l: joi.number().required(),
  },
};

export const getDeleteCourse = {
  params: {
    id: str.required(),
  },
};
// eslint-disable-next-line import/prefer-default-export
export const courseValidate = {
  body: {
    data: {
      title: str.min(3).max(100).required(),
      type: str,
      note: str,
      place: str,
      date: {
        from: joi.date(),
        to: joi.date(),
      },
      status: str,
      interaction: str.allow(inter),
      research: ary.items(joi.object({
        title: str,
      })),
      individuals: str,
      by: str,
      editBy: str,

    },
  },
};
