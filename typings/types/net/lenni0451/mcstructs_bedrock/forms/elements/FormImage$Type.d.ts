import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FormImage$Type extends Enum<FormImage$Type> {
    static PATH: FormImage$Type;
    static URL: FormImage$Type;
    static byName(paramarg0: string): FormImage$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FormImage$Type;
    static values(): FormImage$Type[];
    private constructor(arg2: string)
    getName(): string;
    name(): "PATH" | "URL";
}