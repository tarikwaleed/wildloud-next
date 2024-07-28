"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";

import { useUser } from "@clerk/clerk-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProgressSpinner } from "primereact/progressspinner";
const formSchema = z.object({
  url: z.string().url(),
  platform: z.string(),
  impression: z.string(),
  points: z.coerce.number(),
});
export function SubmitsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const createSubmit = useMutation(api.submit.createOne);

  const { user } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // setTimeout(() => {
    //   console.log(values);
    //   setIsSubmitting(false);
    // }, 1000);

    const createdSubmitId = await createSubmit({
      url: values.url,
      platform: values.platform,
      impression: values.impression,
      points: values.points,
      userId: user?.id,
    });

    setIsSubmitting(false);
  }

  const platforms: { [key: string]: string } = {
    fb: "Facebook",
    yt: "Youtube",
    x: "X",
  };

  const handleValueChange = (value) => {
    setSelectedPlatform(value);
  };

  const impressionOptions: { [key: string]: string[] } = {
    fb: ["Share", "Comment"],
    yt: ["View", "Subscribe", "Like"],
    x: ["Retweet", "Favorite"],
  };

  const renderImpressionsOptions = () => {
    if (!selectedPlatform) return null;
    return impressionOptions[selectedPlatform].map((impression) => (
      <SelectItem key={impression} value={impression.toLowerCase()}>
        {impression}
      </SelectItem>
    ));
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-8xl font-black mb-6">Your Submits</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>url</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={(value) => {
                    handleValueChange(value);
                    field.onChange(value); // Ensure the field value is updated
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(platforms).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value}
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
            name="impression"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Impression</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>{renderImpressionsOptions()}</SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="points"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Points</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between">
            {!isSubmitting ? (
              <Button type="submit">Submit</Button>
            ) : (
              <>
                <div>
                  <ProgressSpinner
                    style={{ width: "50px", height: "50px" }}
                    animationDuration=".4s"
                  />
                </div>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
