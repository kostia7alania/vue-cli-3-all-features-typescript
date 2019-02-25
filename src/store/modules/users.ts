import {VuexModule, Module, getModule, Mutation, Action} from 'vuex-module-decorators'
import store from '@/store'
import {User, Profile, UserSubmit} from '../models'
import { loginUser, fetchProfile } from '../api';

@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true
})
export class UsersModule extends VuexModule {
    user: User | null = null
    profile: Profile | null = null

    @Mutation 
    setUser(user: User) {
        this.user = user
    }

    @Mutation
    setProfile (profile: Profile) {
        this.profile = profile
    }

    get username() {
        return this.user && this.user.username || null
    }

    @Action({commit: 'setUser' })
    async login(userSubmit: UserSubmit) {
     try{
        const user = await loginUser(userSubmit)
        return user
     } catch (e) {
         console.warn('err->', e)
         throw new Error('Invalid username or password')
     }
    }
    

    @Action({commit: 'setProfile'})
    async loadProfile(username: string) {
        const profile = await fetchProfile(username)
        return profile
    }

}

export default getModule(UsersModule);