import { useToast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";
import { useTranslation } from "react-i18next";

export const useHandleError = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleError = (error: Error | AxiosError | unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message) {
        toast({
          title: t("error"),
          description: error.response.data.message,
          variant: "destructive",
        });
      }

      const errorDetails = error.response?.data.errors;
      if (errorDetails) {
        Object.entries(errorDetails).forEach(([key, value]) => {
          toast({
            title: key,
            description: Array.isArray(value) ? value[0] : value,
            variant: "destructive",
          });
        });
      }
    } else {
      console.error("Unexpected error:", error);
      toast({
        title: t("error"),
        description: t("unexpected_error"),
        variant: "destructive",
      });
    }
  };

  return handleError;
};
