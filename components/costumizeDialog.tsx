import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"



type Tprops = {
  title: string,
  children: React.ReactNode,
  open: boolean,
  setIsOpen : (vl:boolean) =>void
}

function CostumizeDialog({title, children, open, setIsOpen} : Tprops) {
  return (
    <Dialog open={open} onOpenChange={() => setIsOpen(false)}>
    <DialogOverlay />
  <DialogContent >
    <DialogHeader className="">
      <DialogTitle className="font-semibold text-[20px] lg:text-[32px] text-black">{title}</DialogTitle>
      <DialogDescription className="flex-1  ">
      {children}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default CostumizeDialog