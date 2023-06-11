import * as yup from 'yup';

const contactsSchema = yup.object({
    name: yup
        .string()
        .required('نام الزامی میباشد')
        .min(3, 'نام نمیتواند کمتر از 3 حرف باشد'),
    photo: yup.url('آدرس معتبر نیست').required('آدرس عکس الزامی میباشد'),
    mobile: yup
        .number()
        .required('شماره موبایل الزامی میباشد')
        .min(5, 'شماره موبایل نمیتواند کمتر از 11 عدد باشد')
        .max(5, 'شماره موبایل نمیتواند بیشتر از 11 عدد باشد'),
    email: yup
        .string()
        .email('آدرس ایمیل معتبر نیست')
        .required('ایمیل الزامی میباشد'),
    job: yup.string().nullable(),
    group: yup.string().required('انتخاب گروه الزامی می باشد'),
});

export default contactsSchema;
