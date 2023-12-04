"use client";

import { useEffect, useState } from "react";

function useMount() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, [mount]);

  return mount;
}

export default useMount;
