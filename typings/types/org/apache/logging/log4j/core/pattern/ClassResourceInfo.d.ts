import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassResourceInfo extends Object {
    constructor(clazz: Class<Object>, exact: boolean)
    // private clazz: Class<Object>;
    // private renderer: (param0: StringBuilder) => void;
    render(buffer: StringBuilder): void;
}