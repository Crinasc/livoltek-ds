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
        Secondary: "secondary",
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
      iconLeft: figma.boolean("icon_left"),
      iconRight: figma.boolean("icon_right"),
      disabled: figma.boolean("Disabled"),
      children: figma.string("Button Text"),
    },
    example: (props) => (
      <Button 
        variant={props.variant} 
        size={props.size}
        state={props.state}
        disabled={props.disabled}
        iconLeft={props.iconLeft ? <Circle className="w-4 h-4" /> : null}
        iconRight={props.iconRight ? <ChevronDown className="w-4 h-4" /> : null}
      >
        {props.children || "Button"}
      </Button>
    ),
  },
)
