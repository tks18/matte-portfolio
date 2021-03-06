<template>
  <div id="home-mainhero" class="column is-full non-touch">
    <div
      :class="
        'hero is-fullheight' +
        ($vuetify.theme.dark ? ' grad-back-dark' : ' grad-back-light')
      "
    >
      <div :class="'hero-body' + (ismobile ? ' ma-1 px-0 py-3' : ' ma-2 pa-8')">
        <div class="container">
          <div class="columns is-multiline is-centered is-vcentered">
            <div class="column is-full">
              <div
                :class="
                  'text text-center font-weight-bold' +
                  (ismobile ? ' text-h4' : ' text-h2')
                "
              >
                Designer, Front-end & Backend Developer
              </div>
              <div
                :class="
                  'text font-weight-bold my-2 py-2 mx-2 px-2 text-center' +
                  (ismobile ? ' text-h4' : ' text-h3')
                "
              >
                <v-tooltip
                  v-model="toggleTooltip"
                  top
                  transition="slide-y-transition"
                >
                  <template #activator="{ on, attrs }">
                    <span
                      v-bind="attrs"
                      class="fit-text non-touch point-cursor"
                      v-on="on"
                      @click="loopRandEmoji()"
                    >
                      {{ animatedArray.randEmoji }}
                    </span>
                  </template>
                  <span>Click here to Shuffle Emoji's</span>
                </v-tooltip>
              </div>
              <div
                :class="
                  'text text-center font-weight-bold' +
                  (ismobile ? ' text-body-2' : ' text-body-1')
                "
              >
                I design and code beautifully simple things, and I love what I
                do.
              </div>
            </div>
            <div
              :class="
                'column is-half' +
                (ismobile ? ' has-text-centered ma-2 ' : ' has-text-right')
              "
            >
              <v-avatar :size="ismobile ? 250 : 380">
                <v-img :src="heroImg" alt="Main Image" />
              </v-avatar>
            </div>
            <div
              :class="
                'column is-centered' +
                (ismobile ? ' is-full ' : ' is-half ') +
                ' text text-center text-overline font-weight-bold'
              "
            >
              <v-row v-if="!ismobile" align="center">
                <v-col
                  v-for="(button, index) in heroButtons"
                  :key="index"
                  :cols="
                    index == heroButtons.length - 1
                      ? index % 2 == 0
                        ? 12
                        : 6
                      : 6
                  "
                  :align="
                    index == heroButtons.length - 1
                      ? index % 2 == 0
                        ? 'center'
                        : 'left'
                      : index % 2 == 0
                      ? 'right'
                      : 'left'
                  "
                >
                  <v-btn
                    large
                    elevation="24"
                    text
                    raised
                    outlined
                    @click="$vuetify.goTo('#' + button.id)"
                  >
                    <v-icon> {{ button.icon }} </v-icon>
                    {{ button.name }}
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="ismobile" align="center">
                <v-col cols="6" align="right">
                  <v-btn
                    elevation="24"
                    text
                    raised
                    outlined
                    @click="$vuetify.goTo('#home-feedbacktitle')"
                  >
                    <v-icon> mdi-alarm-bell </v-icon>
                    Contact Me
                  </v-btn>
                </v-col>
                <v-col cols="6" align="left">
                  <v-btn
                    elevation="24"
                    text
                    raised
                    outlined
                    @click="$vuetify.goTo('#home-emailme')"
                  >
                    <v-icon> mdi-at </v-icon>
                    Email Me
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from '@p/gsap';
import { generateRandomEmojis } from '@p/wordmap';

export default {
  name: 'HomeHeroComponent',
  props: {
    ismobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    heroImg: 'https://i.ibb.co/CQqRR3b/profile.png',
    toggleTooltip: false,
    animatedArray: {
      randEmoji: ' ',
    },
    aboutData: {
      image: 'https://i.ibb.co/b27v0Xf/profile-2.webp',
    },
  }),
  computed: {
    heroButtons() {
      return [
        {
          name: 'About Me',
          icon: 'mdi-information-variant',
          id: 'home-abouttitle',
        },
        {
          name: 'What i Do',
          icon: 'mdi-console-network',
          id: 'home-whatiDo',
        },
        {
          name: 'My Blog',
          icon: 'mdi-post-outline',
          id: 'home-blogtitle',
        },
        {
          name: 'Some Extras',
          icon: 'mdi-one-up',
          id: 'home-astroPicTitle',
        },
        {
          name: 'Projects',
          icon: 'mdi-projector-screen',
          id: 'home-projtitle',
        },
        {
          name: 'Contact Me',
          icon: 'mdi-contactless-payment',
          id: 'home-feedbacktitle',
        },
      ];
    },
  },
  mounted() {
    this.loopRandEmoji();
    setTimeout(() => {
      this.toggleTooltip = true;
    }, 2000);
  },
  methods: {
    loopRandEmoji() {
      gsap.tweenTo({
        vm: this,
        emoji: true,
        arrayName: 'animatedArray',
        map: generateRandomEmojis(3),
        arrayProperty: 'randEmoji',
      });
      setTimeout(() => {
        this.toggleTooltip = false;
      }, 5000);
    },
  },
};
</script>
