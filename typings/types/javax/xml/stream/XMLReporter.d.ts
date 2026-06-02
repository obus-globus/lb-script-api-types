import type { Location } from '../../../javax/xml/stream/Location.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface XMLReporter extends Object{
    report(arg0: string, arg1: string, arg2: Object, arg3: Location): void;
}