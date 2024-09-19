"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema, FormSchema } from "@/components/conventer/schema.ts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { getCurrencyRate } from "@/lib/currency.ts";
import { Rates } from "@/lib/types.ts";
import { CURRENCY_CODES_ARRAY } from "@/lib/config.ts";

export function ConverterForm({ rates }: { rates: Rates }) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      base: {
        currency: "USD",
        value: "",
      },
      target: {
        currency: "EUR",
        value: "",
      },
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const res1 = getCurrencyRate(rates, data);

    form.setValue("target.value", res1);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row items-center justify-between">
          <FormField
            control={form.control}
            name="base.currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="USD" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CURRENCY_CODES_ARRAY.map((currencyCode) => (
                      <SelectItem key={currencyCode} value={currencyCode}>
                        {currencyCode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="base.value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <FormField
            control={form.control}
            name="target.currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="EUR" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {CURRENCY_CODES_ARRAY.map((currencyCode) => (
                      <SelectItem key={currencyCode} value={currencyCode}>
                        {currencyCode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="target.value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Converted Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
