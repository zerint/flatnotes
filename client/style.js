export const primeStyles = {
  toast: {
    message: "flex flex-col items-end ml-[20px]",
    container: ({ props }) => ({
      class: [
        "mt-2 px-3 py-2 rounded-lg max-w-96",
        "bg-theme-background-elevated border border-l-2 border-theme-border ",
        {
          "border-l-theme-success": props.message.severity == "success",
          "border-l-theme-failure": props.message.severity == "error",
        },
      ],
    }),
    icon: "invisible h-0 w-0",
    summary: "font-bold",
  },
};
