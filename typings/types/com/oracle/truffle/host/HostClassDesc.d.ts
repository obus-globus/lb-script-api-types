import type { HostAdapterFactory$AdapterResult } from '../../../../com/oracle/truffle/host/HostAdapterFactory$AdapterResult.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { HostClassDesc$JNIMembers } from '../../../../com/oracle/truffle/host/HostClassDesc$JNIMembers.d.ts'
import type { HostClassDesc$Members } from '../../../../com/oracle/truffle/host/HostClassDesc$Members.d.ts'
import type { HostClassDesc$MethodsBySignature } from '../../../../com/oracle/truffle/host/HostClassDesc$MethodsBySignature.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostFieldDesc } from '../../../../com/oracle/truffle/host/HostFieldDesc.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostClassDesc extends Object {
    constructor(cacheRef: Reference<HostClassCache>, type: Class<Object>)
    // private adapter: HostAdapterFactory$AdapterResult;
    readonly allowedTargetType: boolean;
    readonly allowsImplementation: boolean;
    // private cache: Reference<HostClassCache>;
    // private jniMembers: HostClassDesc$JNIMembers;
    // private members: HostClassDesc$Members;
    // private methodsBySignature: HostClassDesc$MethodsBySignature;
    readonly type: Class<Object>;
    getAdapter(hostContext: HostContext): HostAdapterFactory$AdapterResult;
    // private getCache(): HostClassCache;
    getFieldNames(onlyStatic: boolean): string[];
    getFunctionalMethod(): HostMethodDesc;
    // private getJNIMembers(): HostClassDesc$JNIMembers;
    // private getMembers(): HostClassDesc$Members;
    getMethodNames(onlyStatic: boolean, includeInternal: boolean): string[];
    // private getMethodsBySignature(): HostClassDesc$MethodsBySignature;
    // private getOrSetAdapter(hostContext: HostContext): HostAdapterFactory$AdapterResult;
    getType(): Class<Object>;
    isAllowedTargetType(): boolean;
    isAllowsImplementation(): boolean;
    lookupConstructor(): HostMethodDesc;
    // private lookupField(name: string): HostFieldDesc;
    lookupField(name: string, onlyStatic: boolean): HostFieldDesc;
    // private lookupMethod(name: string): HostMethodDesc;
    lookupMethod(name: string, onlyStatic: boolean): HostMethodDesc;
    lookupMethodByJNIName(jniName: string, onlyStatic: boolean): HostMethodDesc;
    lookupMethodBySignature(nameAndSignature: string, onlyStatic: boolean): HostMethodDesc;
    // private lookupStaticField(name: string): HostFieldDesc;
    // private lookupStaticMethod(name: string): HostMethodDesc;
    toString(): string;
}