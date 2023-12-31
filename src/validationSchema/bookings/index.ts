import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  pick_up_location: yup.string().required(),
  drop_off_location: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
