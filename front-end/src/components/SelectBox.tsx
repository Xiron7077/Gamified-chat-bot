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

export function SelectBox() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select from following" />
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
    </Select>
  )
}
