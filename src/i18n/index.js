import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      register: {
        title: "Create New Account",
        name: "Name",
        email: "Email",
        password: "Password",
        password_confirmation: "Password Confirmation",
        mobile: "Country Code",
        client_type: "Client Type",
        company_name: "Company Name",
        issuing_authority: "Issuing Authority",
        commercial_license_number: "Commercial License Number",
        submit: "Register",
        country_code: "country code",
        registerHaveEmail: "Do You Have Email",
        login: "login",
        errors: {
          required: "This field is required",
          email: "Invalid email address",
          password:
            "Password must contain uppercase, lowercase, numbers and symbols",
          password_confirmation: "Passwords do not match",
          maxLength: "Maximum length is {255} characters",
          commercial_license_number: "commercial license number is Required",
          issuing_authority: "Issuing Authority required",
          company_name: "company name Required",
          validEmail: "Please enter valid Email",
          mobileNumber: "Number must be exactly 10 digits",
        },
      },
      login: {
        title: "log in",
        email: "Email",
        password: "Password",
        submit: "log in",
        doNotHaveAccount: "Do not Have Email Register Instead ?",
        register: "register",
        errors: {
          required: "Required",
          email: "Invalid email address",
        },
      },
    },
  },
  ar: {
    translation: {
      register: {
        title: "إنشاء حساب جديد",
        name: "الاسم",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        password_confirmation: "تأكيد كلمة المرور",
        mobile: "الهاتف",
        country_code: "كود الدوله",
        client_type: "نوع العميل",
        company_name: "اسم الشركة",
        issuing_authority: "جهة الإصدار",
        commercial_license_number: "رقم السجل التجاري",
        submit: "تسجيل",
        registerHaveEmail: "هل لديك حساب بالفعل",
        login: "نسجيل الدخول",
        errors: {
          required: "هذا الحقل مطلوب",
          email: "البريد الإلكتروني غير صالح",
          password:
            "يجب أن تحتوي كلمة المرور على أحرف كبيرة وصغيرة وأرقام ورموز",
          password_confirmation: "كلمة المرور غير متطابقة",
          maxLength: "يجب ألا يتجاوز الحد الأقصى {255} حرف",
          commercial_license_number: "رقم السجل التجاري مطلوب",
          issuing_authority: "جهة الإصدار مطلوب",
          company_name: "اسم الشركة مطلوب",
          validEmail: "من فضلك ادخل بريد الكتروني صالح",
          mobileNumber: "رقم الهاتف يجب ان يكون من 10 ارقام",
        },
      },
      login: {
        title: "تسجيل دخول",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        submit: "تسجيل الدخول",
        doNotHaveAccount: "ليس لديك حساب تسجيل حساب  ",
        register: "تسجيل حساب",
        errors: {
          required: "هذا الحقل مطلوب",
          email: "البريد الإلكتروني غير صالح",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "en", // Read language from localStorage or default to 'en'
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Function to change the language and save it to localStorage
// export const changeLanguage = (lng: string) => {
//   i18n.changeLanguage(lng);
//   localStorage.setItem("i18nextLng", lng);
// };

export default i18n;
