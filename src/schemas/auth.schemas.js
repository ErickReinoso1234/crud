import { z } from "zod";

export const registerShema = z.object({
  username: z.string({
    required_error: "Usuario requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email("Email no válido"),
  phone: z
    .string({
      required_error: "Teléfono requerido",
    })
    .min(10, "Teléfono debe tener al menos 10 dígitos"),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, "Contraseña debe tener al menos 6 caracteres"),
});

export const loginShema = z.object({
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email("Email no válido"),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, "Contraseña debe tener al menos 6 caracteres"),
});
