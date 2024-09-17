import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import NumberInput from "../components/NumberInput";

  const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "social",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter your besic Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`w-full p-1 border box-border rounded ${
                !errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
            />
          </Field>

          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
              })}
              className={`w-full p-1 border box-border rounded ${
                !errors.password ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password here"
            />
          </Field>

          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full Name is required.",
              })}
              className={`w-full p-1 border box-border rounded ${
                !errors.fname ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your full name here"
            />
          </Field>

          <Field label="Picture" error={errors.picture}>
            <input
              {...register("picture", {
                required: "Picture is required.",
              })}
              
              type="file"
              name="picture"
              id="picture"
              
            />
          </Field>

          <Field label="Age" error={errors.age}>
            <Controller
              name="age"
              control={control}
              defaultValue={18}
              render={({field: {ref, ...field}})=>(
                <NumberInput 
                 id="age"
                 className={`w-full p-1 border box-border rounded ${
                   !errors.age ? "border-red-500" : "border-gray-300"
                 }`}
                 {...field}
                />
              )}
              rules ={{
                max:{
                  value: 34,
                  message: "Age must be less than 34."
                },
                min:{
                  value: 18,
                  message: "Age must be greater than 18."
                }
              }}
              />
          </Field>

          <FieldSet label="Enter your social Details">
            {fields.map((field, index) => {
              return (
                <div className="flex flex-row" key={field.id}>
                  <Field
                    label="Social Name"
                    error={errors.social?.[index]?.name}
                  >
                    <input
                      {...register(`social.${index}.name`, {
                        required: "Name is required.",
                      })}
                      className={`w-full p-1 border box-border rounded ${
                        !errors.social?.[index]?.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your social name here"
                    />
                  </Field>
                  <Field
                    label="Social URL"
                    error={errors.social?.[index]?.url}
                  >
                    <input
                      {...register(`social.${index}.url`, {
                        required: "url is required.",
                      })}
                      className={`w-full p-1 border box-border rounded ${
                        !errors.social?.[index]?.url
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your social url here"
                    />
                  </Field>
                  <button className="mt-8 mr-2 text-xl" onClick={() => remove(index)}>
                      &#8722;
                  </button>
                </div>
              );
            })}
            <button
              className="m-auto p-1 border box-border bg-orange-400 border-gray-300 rounded cursor-pointer"
              onClick={() => append({ name: "", url: "" })}
            >
              Add a social link
            </button>
          </FieldSet>

          <div>{errors?.root?.random?.message}</div>
          <Field>
            <button className="m-auto p-1 border box-border bg-orange-400 border-gray-300 rounded cursor-pointer">
              Register
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};


export default RegistrationForm