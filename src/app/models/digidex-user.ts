import { User } from "@angular/fire/auth";

export interface DigidexUser extends User {
    uid: string;
}
