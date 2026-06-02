import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JValue extends Object, PointerBase{
    addressOf(index: number): JNI$JValue;
    getBoolean(): boolean;
    getByte(): number;
    getChar(): string;
    getDouble(): number;
    getFloat(): number;
    getInt(): number;
    getJObject(): JNI$JObject;
    getLong(): number;
    getShort(): number;
    setBoolean(b: boolean): void;
    setByte(b: number): void;
    setChar(ch: string): void;
    setDouble(d: number): void;
    setFloat(f: number): void;
    setInt(i: number): void;
    setJObject(obj: JNI$JObject): void;
    setLong(l: number): void;
    setShort(s: number): void;
}