import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class JavaVersion extends Enum<JavaVersion> {
    static JAVA_0_9: JavaVersion;
    static JAVA_10: JavaVersion;
    static JAVA_11: JavaVersion;
    static JAVA_12: JavaVersion;
    static JAVA_13: JavaVersion;
    static JAVA_14: JavaVersion;
    static JAVA_15: JavaVersion;
    static JAVA_16: JavaVersion;
    static JAVA_17: JavaVersion;
    static JAVA_18: JavaVersion;
    static JAVA_19: JavaVersion;
    static JAVA_1_1: JavaVersion;
    static JAVA_1_2: JavaVersion;
    static JAVA_1_3: JavaVersion;
    static JAVA_1_4: JavaVersion;
    static JAVA_1_5: JavaVersion;
    static JAVA_1_6: JavaVersion;
    static JAVA_1_7: JavaVersion;
    static JAVA_1_8: JavaVersion;
    static JAVA_1_9: JavaVersion;
    static JAVA_20: JavaVersion;
    static JAVA_21: JavaVersion;
    static JAVA_22: JavaVersion;
    static JAVA_23: JavaVersion;
    static JAVA_24: JavaVersion;
    static JAVA_25: JavaVersion;
    static JAVA_26: JavaVersion;
    static JAVA_9: JavaVersion;
    static JAVA_RECENT: JavaVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JavaVersion;
    static values(): JavaVersion[];
    private constructor(arg2: number, arg3: string)
    // private name: string;
    // private value: number;
    atLeast(arg0: JavaVersion): boolean;
    atMost(arg0: JavaVersion): boolean;
    toString(): string;
    name(): "JAVA_0_9" | "JAVA_1_1" | "JAVA_1_2" | "JAVA_1_3" | "JAVA_1_4" | "JAVA_1_5" | "JAVA_1_6" | "JAVA_1_7" | "JAVA_1_8" | "JAVA_1_9" | "JAVA_9" | "JAVA_10" | "JAVA_11" | "JAVA_12" | "JAVA_13" | "JAVA_14" | "JAVA_15" | "JAVA_16" | "JAVA_17" | "JAVA_18" | "JAVA_19" | "JAVA_20" | "JAVA_21" | "JAVA_22" | "JAVA_23" | "JAVA_24" | "JAVA_25" | "JAVA_26" | "JAVA_RECENT";
}