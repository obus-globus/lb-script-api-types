import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Snappy$State extends Enum<Snappy$State> {
    static READING_COPY: Snappy$State;
    static READING_LITERAL: Snappy$State;
    static READING_PREAMBLE: Snappy$State;
    static READING_TAG: Snappy$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Snappy$State;
    static values(): Snappy$State[];
    private constructor()
    name(): "READING_PREAMBLE" | "READING_TAG" | "READING_LITERAL" | "READING_COPY";
}