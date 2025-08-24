import { cn } from "../classMarge/marge"

export const Container = ({className, children}) => {
    return (
        <div className={cn("max-w-7xl px-3 mx-auto", className)}>
            {children}
        </div>
    )
}