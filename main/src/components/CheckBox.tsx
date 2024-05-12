import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface CheckBoxProp{
    children: string;
}

export default function CheckBox({children}: CheckBoxProp) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id={children}/>
        <div>
            <Label htmlFor={children}>{children}</Label>
        </div>
      </div>
    </div>
  )
}
