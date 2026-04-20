import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle, Loader2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  date: z.instanceof(Date, { message: 'Please select a preferred date.' }),
  time: z.string().min(1, { message: 'Please select a preferred time.' }),
  message: z.string().optional(),
});

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: '',
      time: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  return (
    <section id="appointment" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-background border border-primary/10 overflow-hidden shadow-[0_0_50px_rgba(var(--primary),0.05)] relative rounded-sm">
          {/* Tech Overlay */}
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="grid md:grid-cols-5 h-full">
            {/* Left Panel - Tech Info */}
            <div className="md:col-span-2 bg-primary p-12 text-primary-foreground relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <CalendarIcon className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold opacity-70 mb-8 border-b border-primary-foreground/30 pb-2">
                   Access Protocol // Secured
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 uppercase leading-none tracking-tighter">
                  Initialize <br />
                  <span className="opacity-50">Portal.</span>
                </h3>
                <p className="text-primary-foreground/70 mb-12 leading-relaxed text-[11px] font-mono uppercase tracking-tighter">
                  [STEP 1]: TRANSMIT DATA <br />
                  [STEP 2]: BIOSCAN VERIFICATION <br />
                  [STEP 3]: TIMELINE ALLOCATION
                </p>
              </div>

              <div className="relative z-10 pt-10 border-t border-primary-foreground/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center border border-white/20">
                       <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Response Latency</p>
                      <p className="text-sm font-bold">&lt; 120 Seconds</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center border border-white/20">
                       <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Data Security</p>
                      <p className="text-sm font-bold">256-Bit SSL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
            </div>

            {/* Form Panel */}
            <div className="md:col-span-3 p-10 relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">Patient ID [Name]</FormLabel>
                                <FormControl>
                                  <Input placeholder="SURNAME, GIVEN" className="bg-primary/5 border-primary/10 rounded-none h-12 focus-visible:ring-primary focus-visible:border-primary font-mono text-xs uppercase" {...field} />
                                </FormControl>
                                <FormMessage className="text-[9px] font-mono" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">ID Contact [Phone]</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1-000-000-0000" className="bg-primary/5 border-primary/10 rounded-none h-12" {...field} />
                                </FormControl>
                                <FormMessage className="text-[9px] font-mono" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">Data Node [Email]</FormLabel>
                              <FormControl>
                                <Input placeholder="USER@NETWORK.COM" className="bg-primary/5 border-primary/10 rounded-none h-12 uppercase font-mono text-xs" {...field} />
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono" />
                            </FormItem>
                          )}
                        />

                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">Operation Mode</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-primary/5 border-primary/10 rounded-none h-12 focus:ring-primary shadow-none">
                                      <SelectValue placeholder="SELECT PROTOCOL" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="rounded-none border-primary/20 bg-background">
                                    <SelectItem value="general" className="text-xs uppercase tracking-wider">General Scan</SelectItem>
                                    <SelectItem value="whitening" className="text-xs uppercase tracking-wider">Laser Whitening</SelectItem>
                                    <SelectItem value="braces" className="text-xs uppercase tracking-wider">Alignment</SelectItem>
                                    <SelectItem value="implants" className="text-xs uppercase tracking-wider">Biosythetic Implant</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-[9px] font-mono" />
                              </FormItem>
                            )}
                          />
                           <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">Shift Allocation</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-primary/5 border-primary/10 rounded-none h-12 focus:ring-primary shadow-none">
                                      <SelectValue placeholder="SELECT WINDOW" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="rounded-none border-primary/20 bg-background">
                                    <SelectItem value="morning" className="text-xs uppercase tracking-wider">Morning (AM)</SelectItem>
                                    <SelectItem value="afternoon" className="text-xs uppercase tracking-wider">Afternoon (PM)</SelectItem>
                                    <SelectItem value="evening" className="text-xs uppercase tracking-wider">Night (Late)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-[9px] font-mono" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">Timeline [Target Date]</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-mono text-[11px] bg-primary/5 border-primary/10 rounded-none h-12 uppercase tracking-widest",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Target Timestamp</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 rounded-none border-primary/20" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value as Date}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                    className="bg-background"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage className="text-[9px] font-mono" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest font-bold text-primary">Case Matrix [Notes]</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Input specific mission parameters or medical history..."
                                  className="resize-none bg-primary/5 border-primary/10 rounded-none min-h-[80px] focus-visible:ring-primary font-mono text-xs uppercase"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono" />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full h-14 text-xs font-bold uppercase tracking-[0.4em] rounded-none bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              TRANSMITTING...
                            </>
                          ) : (
                            'Initialize Transmission'
                          )}
                        </Button>
                      </form>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center justify-center h-full py-6 bg-primary/5 border border-primary/20"
                  >
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/30">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3 uppercase italic tracking-tighter">Transmission Confirmed</h3>
                    <p className="text-primary/60 mb-8 text-[11px] font-mono leading-relaxed max-w-xs uppercase">
                      User request ID #DS-9902 logged. <br />
                      Concierge unit will stabilize connection shortly.
                    </p>
                    <Button variant="outline" className="rounded-none border-primary/30 text-primary uppercase text-[10px] font-bold tracking-widest px-8" onClick={() => {
                        setIsSuccess(false);
                        form.reset();
                    }}>
                      New Submission
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
