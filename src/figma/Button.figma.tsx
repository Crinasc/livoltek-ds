import React from "react"
import { Button } from "../components/Button"
import figma from "@figma/code-connect"
import { Circle, ChevronDown } from 'lucide-react'

/**
 * -- Code Connect para Button Component --
 * Conecta o componente Button do React com o design no Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/axxySxvdMc6eGq9hEM7ilm/Livoltek-DS-V2?node-id=242-3",
  {
    props: {
      variant: figma.enum("Type", {
        Primary: "primary",
      }),
      size: figma.enum("Size", {
        sm: "sm",
        md: "md", 
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
      leadingIcon: figma.boolean("leading_icon"),
      trailingIcon: figma.boolean("trailing_icon"),
      disabled: figma.boolean("Disabled"),
      type: figma.enum("Button Type", {
        Button: "button",
        Submit: "submit",
        Reset: "reset",
      }),
      children: figma.string("Button Text"),
    },
    example: (props) => (
      <Button 
        variant={props.variant} 
        size={props.size}
        state={props.state}
        disabled={props.disabled}
        type={props.type}
        leadingIcon={props.leadingIcon ? <Circle className="w-4 h-4" /> : null}
        trailingIcon={props.trailingIcon ? <ChevronDown className="w-4 h-4" /> : null}
      >
        {props.children || "Button"}
      </Button>
    ),
  },
)
