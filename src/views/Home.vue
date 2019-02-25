<template>
    <div class="home-page">
    
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">UTair</h1>
                <p>Test app for code-review
                    <br>by <span style="color:blue; font-weight:777">@kostia7alania</span></p>
            </div>
        </div>
    
        <div class="container page">
            <div class="row">
    
                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <a class="nav-link disabled" href="">Your Feed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="">Global Feed</a>
                            </li>
                        </ul>
                    </div>
    
    
 <ArticlePreview
    v-for="article in feed"
    :article="article"
    :key="article.slug"
 />
                    
    
                </div>
    
                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>
    
                        <div class="tag-list">
                            <a href="" class="tag-pill tag-default">programming</a>
                            <a href="" class="tag-pill tag-default">javascript</a>
                            <a href="" class="tag-pill tag-default">emberjs</a>
                            <a href="" class="tag-pill tag-default">angularjs</a>
                            <a href="" class="tag-pill tag-default">react</a>
                            <a href="" class="tag-pill tag-default">mean</a>
                            <a href="" class="tag-pill tag-default">node</a>
                            <a href="" class="tag-pill tag-default">rails</a>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Component
    } from 'vue-property-decorator'
    import ArticlePreview from '@/components/article/ArticlePreview'
    import articles from '@/store/modules/articles.ts'
    import { Article } from '@/store/modules'
    
    @Component({
        components: {
            ArticlePreview
        }
    })

    export default class Home extends Vue {
        feed: Article[] = []
         

        async created() {
            articles.refreshFeed('globsal').then(
                () => {
                this.feed = articles.feed
            })
        }

    }
</script>