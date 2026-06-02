import type { Name } from '../../javax/naming/Name.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface NameParser extends Object{
    parse(arg0: string): Name;
}