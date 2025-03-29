import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";


export function AnimatedShinyTextDemo() {
    return (
        <div className="z-10 flex h-auto items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border border-black/5 bg-[#FFD2DA] text-base text-[#FF355A] transition-all ease-in hover:cursor-pointer dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex gap-2 text-[#FF355A] items-center justify-center px-4 py-1 transition ease-out font-bold">
                    <div class="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">📣 Announcement</div>
                    <span>Introducing WebWorks Studio</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </div>
        </div>
    );
}
