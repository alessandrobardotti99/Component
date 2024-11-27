export const components = [
  {
    id: "button",
    name: "Button",
    description: "Versatile button component with multiple variants",
    type: "free",
    category: "free",
    code: `import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <Button variant="default">Click me</Button>
  )
}`,
  },
  {
    id: "input",
    name: "Input",
    description: "Text input with variants",
    type: "free",
    category: "free",
    code: `import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return <Input placeholder="Type here..." />
}`,
  },
  {
    id: "badge",
    name: "Badge",
    description: "Status indicator component",
    type: "free",
    category: "free",
    code: `import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return <Badge>New</Badge>
}`,
  },
  {
    id: "progress",
    name: "Progress",
    description: "Progress indicator component",
    type: "free",
    category: "free",
    code: `import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  return <Progress value={60} />
}`,
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "User image component",
    type: "free",
    category: "free",
    code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
  },
  {
    id: "alert",
    name: "Alert",
    description: "Alert message component",
    type: "free",
    category: "free",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function AlertDemo() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>This is an important message.</AlertDescription>
    </Alert>
  )
}`,
  },
  {
    id: "dropdown",
    name: "Dropdown Menu",
    description: "Menu with dropdown functionality",
    type: "free",
    category: "free",
    code: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    id: "data-table",
    name: "Data Table",
    description: "Advanced data grid component",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Date picker calendar component",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "command",
    name: "Command",
    description: "Command palette component",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "form",
    name: "Form Builder",
    description: "Dynamic form builder component",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "charts",
    name: "Charts",
    description: "Data visualization components",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "Switch between two states with animation",
    type: "free",
    category: "free",
    code: `import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}`,
  },
  {
    id: "multi-select",
    name: "Multi Select",
    description: "Advanced multiple selection component with search",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "tree-view",
    name: "Tree View",
    description: "Hierarchical data display with expand/collapse",
    type: "premium",
    category: "premium",
    code: "Premium content",
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Loading placeholder animation",
    type: "free",
    category: "free",
    code: `import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Show additional information on hover",
    type: "free",
    category: "free",
    code: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
  },
  {
    id: "accordion",
    name: "Accordion",
    description: "Collapsible content sections",
    type: "free",
    category: "free",
    code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content for section 1
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  },
];
