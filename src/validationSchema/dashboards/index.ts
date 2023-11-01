import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  last_updated: yup.date().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
