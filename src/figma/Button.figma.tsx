import React from "react"
import { Button } from "../components/Button"
import figma from "@figma/code-connect"

/**
 * -- Code Connect para Button Component --
 * Conecta o componente Button do React com o design no Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/axxySxvdMc6eGq9hEM7ilm/Livoltek-DS-V2?node-id=242-3",
  {
    props: {
      variant: figma.enum("Property 1", {
        Primary: "primary",
        Secondary: "secondary",
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
      disabled: figma.boolean("Disabled"),
      children: figma.string("Button Text"),
    },
    example: (props) => (
      <Button 
        variant={props.variant} 
        state={props.state}
        disabled={props.disabled}
      >
        {props.children || "Button Test"}
      </Button>
    ),
  },
)
