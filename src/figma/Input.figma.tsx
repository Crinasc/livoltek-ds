import React from "react"
import { Input } from "../components/Input"
import figma from "@figma/code-connect"

/**
 * -- Code Connect para Input Component --
 * Conecta o componente Input do React com o design no Figma
 */

figma.connect(
  Input,
  "https://www.figma.com/design/axxySxvdMc6eGq9hEM7ilm/Livoltek-DS-V2?node-id=247-59",
  {
    props: {
      type: figma.enum("Input Type", {
        text: "text",
        password: "password",
        email: "email",
      }),
      placeholder: figma.string("Placeholder"),
      value: figma.string("Value"),
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Input 
        type={props.type}
        placeholder={props.placeholder || "username"}
        value={props.value}
        disabled={props.disabled}
      />
    ),
  },
)
