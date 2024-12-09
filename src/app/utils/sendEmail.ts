import { FormData } from "../../components/ContactForm";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  const res = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert(err);
    });
    
  return res;
}
