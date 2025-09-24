import React from "react"
import { Button } from "../components/Button"
import figma from "@figma/code-connect"

// Ícones simples para demonstração
const CircleIcon = () => <span className="w-4 h-4 border-2 border-white rounded-full" />;
const ChevronIcon = () => <span className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45" />;

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
        iconLeft={props.iconLeft ? <CircleIcon /> : null}
        iconRight={props.iconRight ? <ChevronIcon /> : null}
      >
        {props.children || "Button"}
      </Button>
    ),
  },
)
