import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectBoxProp{
  label: string;
  placeholder?: string;
}

export function SelectBox({label, placeholder = "Select from following"}: SelectBoxProp) {
  return (
    <Select>
      <div>
        <label className="ml-1 text-lg">{label}</label>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Pronouns</SelectLabel>
            <SelectItem value="male">He/Him</SelectItem>
            <SelectItem value="female">She/Her</SelectItem>
            <SelectItem value="they">They/Them</SelectItem>
            <SelectItem value="non-binary">Non-Binary</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </div> 
    </Select>
  )
}
