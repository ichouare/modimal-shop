import React from "react";
import { Button } from "./ui/button";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

type Tprops = {
  refresh: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<any, Error>>;
};

function Error({ refresh }: Tprops) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <p className="bodyLG">
        Something went wrong while loading the data. Please try again.
      </p>
      <Button
        className="w-[200px]"
        onClick={() => {
          refresh();
        }}
      >
        Try aging
      </Button>
    </div>
  );
}

export default Error;
