"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ghost } from "lucide-react";

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDailog(true)}
      >
        <h2 className="   text-lg text-center">+ Add New </h2>
      </div>
      <Dialog open={openDailog}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <div>
                <h2>Tell us more about your job interview</h2>
              </div>
              <Input placeholder="" className="mt-5" />
              <Input placeholder="" className="mt-5" />
              <Input placeholder="" className="mt-5" />
              <div className="flex gap-5 justify-end">
                <Button variant="ghost" onClick={() => setOpenDailog(false)}>
                  {" "}
                  Cancel
                </Button>
                <Button>Start Interview</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
