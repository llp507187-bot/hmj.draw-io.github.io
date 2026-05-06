export const createIdGenerator = (now: () => number = () => Date.now()) => {
  let lastIssued = 0;

  return () => {
    const current = now();
    lastIssued = current > lastIssued ? current : lastIssued + 1;
    return String(lastIssued);
  };
};

export const nextClientId = createIdGenerator();
