import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { ClassNameMatcher } from '../../../../../org/apache/commons/io/serialization/ClassNameMatcher.d.ts'
import type { ObjectStreamClassPredicate } from '../../../../../org/apache/commons/io/serialization/ObjectStreamClassPredicate.d.ts'
import type { ValidatingObjectInputStream } from '../../../../../org/apache/commons/io/serialization/ValidatingObjectInputStream.d.ts'
export class ValidatingObjectInputStream$Builder extends AbstractStreamBuilder<ValidatingObjectInputStream, ValidatingObjectInputStream$Builder> {
    constructor()
    readonly predicate: ObjectStreamClassPredicate;
    accept(arg0: Pattern): ValidatingObjectInputStream$Builder;
    accept(...arg0: Class<Object>[]): ValidatingObjectInputStream$Builder;
    accept(...arg0: string[]): ValidatingObjectInputStream$Builder;
    accept(arg0: (param0: string) => boolean): ValidatingObjectInputStream$Builder;
    get(): ValidatingObjectInputStream;
    getPredicate(): ObjectStreamClassPredicate;
    reject(arg0: Pattern): ValidatingObjectInputStream$Builder;
    reject(...arg0: Class<Object>[]): ValidatingObjectInputStream$Builder;
    reject(...arg0: string[]): ValidatingObjectInputStream$Builder;
    reject(arg0: (param0: string) => boolean): ValidatingObjectInputStream$Builder;
    setPredicate(arg0: ObjectStreamClassPredicate): ValidatingObjectInputStream$Builder;
}