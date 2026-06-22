import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JavaVMAttachArgs extends Object, PointerBase{
    equal(val: ComparableWord): boolean;
    getGroup(): JNI$JObject;
    getName(): CCharPointer;
    getVersion(): number;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
    setGroup(group: JNI$JObject): void;
    setName(name: CCharPointer): void;
    setVersion(version: number): void;
}