import React from "react"
import Button from "../components/Button"
import figma from "@figma/code-connect"
import { Circle, ChevronDown } from 'lucide-react'

/**
 * -- Code Connect para Button Component --
 * Conecta o componente Button do React com o design no Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/axxySxvdMc6eGq9hEM7ilm/Livoltek-DS-V2?node-id=242-3&t=jx9ecboQKw9sdzqW-4",
  {
    props: {
      variant: figma.enum("variant", {
        primary: "primary",
        secondary: "secondary",
      }),
      size: figma.enum("size", {
        sm: "sm",
        md: "md", 
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
      }),
      state: figma.enum("state", {
        default: "default",
        hover: "hover",
        disabled: "disabled",
      }),
      leadingIcon: figma.boolean("hasIconLeft"),
      trailingIcon: figma.boolean("hasIconRight"),
      children: figma.string("label"),
    },
    example: (props) => (
      <Button 
        variant={props.variant} 
        size={props.size}
        state={props.state}
        leadingIcon={props.leadingIcon ? <Circle className="w-4 h-4" /> : null}
        trailingIcon={props.trailingIcon ? <ChevronDown className="w-4 h-4" /> : null}
      >
        {props.children || "Button"}
      </Button>
    ),
  },
)
