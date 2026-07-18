import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Parameters extends StringValues, Object {
    contains(name: string): boolean;
    contains(name: string, value: string): boolean;
    forEach(body: (param0: string, param1: string[]) => void): void;
    get(name: string): string | null;
    isEmpty(): boolean;
}