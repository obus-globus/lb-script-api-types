// ScriptReflectionUtil augmentation — generic-typed overloads for reflection.
//
// Problem: ts-gen emits ScriptReflectionUtil methods with `Class<Object>`
// parameters and `Object | null` returns (audit row W12). Scripts that
// know what type they're asking for still get back an opaque `Object` and
// have to cast everywhere.
//
// Fix: declaration-merge generic overloads onto the class so callers that
// pass a typed `Class<T>` (or know the type they expect) get back `T | null`
// instead of `Object | null`. The original `Class<Object>` overloads
// remain (declaration merging is additive); TS overload resolution picks
// the more-specific generic form when the call site provides a typed
// Class. ~25 LOC, see audit W12 for context.

import type { Class } from '../types/java/lang/Class.d.ts';
import type { Object } from '../types/java/lang/Object.d.ts';

// Generic-parameter semantics:
//   * `clazz: Class<T>` propagates ONLY when the return is an actual instance
//     of T (i.e. `newInstance`). For `getDeclaredField` the return is the
//     static field's value type, which has no relation to T — so the
//     class parameter stays `Class<Object>` and the caller annotates the
//     expected field-value type as `T` (same pattern as the existing
//     invoke* overloads).
//   * `obj: Object` stays `Object` everywhere — the object's runtime type
//     does not constrain the field/return type the caller is asking for.
//   * Where T appears in the return-type position only, it is unconstrained
//     and acts as a caller-asserted cast. Same pattern as the existing
//     `invokeDeclaredMethod<R>` / `invokeMethod<R>` shape used at runtime.

declare module '../types/net/ccbluex/liquidbounce/script/bindings/api/ScriptReflectionUtil' {
    interface ScriptReflectionUtil {
        getDeclaredField<T extends Object>(clazz: Class<Object>, name: string): T | null;
        getField<T extends Object>(obj: Object, name: string): T | null;
        invokeDeclaredMethod<R extends Object>(clazz: Class<Object>, name: string, args: (Object | null)[]): R | null;
        invokeMethod<R extends Object>(obj: Object, name: string, args: (Object | null)[]): R | null;
        newInstance<T extends Object>(clazz: Class<T>, args: (Object | null)[]): T | null;
        newInstanceByName<T extends Object>(name: string, args: (Object | null)[]): T | null;
        newInstanceByObject<T extends Object>(obj: Object, args: (Object | null)[]): T | null;
    }
}
