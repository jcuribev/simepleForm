import { setIn } from "final-form";
import { GET_MOVIES } from "@/app/graphql/starWars";
import { useQuery } from "@apollo/client";
import client from "@/app/config/apollo";
import {useState} from 'react'
import { userSchema } from "@/app/infrastructure/User/UserSchema";

const useUserFormViewModel = () => {
  const { loading, error: fetchError, data } = useQuery(GET_MOVIES, { client });
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (schema: any) => async (values: any) => {
    if (typeof schema === "function") {
      schema = schema();
    }
    try {
      await schema.validateSync(values, { abortEarly: false });
    } catch (err: any) {
      const errors = err.inner.reduce((formError: any, innerError: any) => {
        return setIn(formError, innerError.path, innerError.message);
      }, {});

      return errors;
    }
  };

  const validate = validateForm(userSchema);

  const submitData = (values: any) => {
    alert(JSON.stringify(values))
    setIsSubmitted(true)
  };

  return {
    validate,
    submitData,
    data,
    loading,
    isSubmitted,
    fetchError
  };
};

export default useUserFormViewModel;
