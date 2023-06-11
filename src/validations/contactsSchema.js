import * as yup from 'yup';

const contactsSchema = yup.object().shape({
    name: yup
        .string()
        .required('نام الزامی میباشد')
        .min(3, 'نام نمیتواند کمتر از 3 حرف باشد'),
    photo: yup
        .string()
        .url('آدرس معتبر نیست')
        .required('تصویر مخاطب الزامی می باشد'),
    mobile: yup.number().required('شماره موبایل الزامی میباشد'),
    email: yup
        .string()
        .email('آدرس ایمیل معتبر نیست')
        .required('ایمیل الزامی میباشد'),
    job: yup.string().nullable(),
    group: yup.string().required('انتخاب گروه الزامی می باشد'),
});

export default contactsSchema;
