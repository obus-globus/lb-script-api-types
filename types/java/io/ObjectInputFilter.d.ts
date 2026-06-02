import type { ObjectInputFilter$FilterInfo } from '../../java/io/ObjectInputFilter$FilterInfo.d.ts'
import type { ObjectInputFilter$Status } from '../../java/io/ObjectInputFilter$Status.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ObjectInputFilter extends Object{
    checkInput(arg0: ObjectInputFilter$FilterInfo): ObjectInputFilter$Status;
}