import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private audio: HTMLAudioElement;
  private isPlaying = false;
  private fadeInterval: any;

  danceGenres = [
    {id: 'ballet', color: '#d1cef4', title: 'Ballet', description: 'Ballet started in Italy around the year 1400, but didn’t really become popular until around the year of 1500. Ballet gained its popularity when a lady of the arts, Catherine de Medici, married King Henry 11 and threw festivals where they would preform ballet dances. Ballet is believed to be the main core of every single dance style.', song: 'assets/songs/ballet.mp3'},
    {id: 'tap', color: '#d8ceee', title: 'Tap', description: 'Tap dancing originated from African tribe dancing. It is believed that tap dancing started in the mid-1800s. Tap dancing makes percussion sounds because of dancers most commonly wearing leather shoes with two pieces of metal and clip and clap against hard floors. Tap is still very popular to this day.', song: 'assets/songs/tap.mp3'},
    {id: 'merengue', color: '#e0cde9', title: 'Merengue', description: 'Merengue was first a music style that originated in the Dominican Republic before it became a dance style. The style originated from laborers working in sugar beet fields. It is a Caribbean dance style that involves partners holding each other in a tango-like position and moving their hips side to side.', song: 'assets/songs/merengue.mp3'},
    {id: 'jazz', color: '#e7cce4', title: 'Jazz', description: 'Jazz dance originated from Africa and puts an emphasis on rhythm and timing. Some older styles of jazz movements include the shimmy, the Lindy hop, and the Charleston. Acro dance is short for acrobatics. It originated in circuses such as Cirque De Soleil. It involves doing smooth and flexible movements, and lots of backbending and tricks. Both these styles are widely popular to this day.', song: 'assets/songs/jazz.mp3'},
    {id: 'contemporary', color: '#eeccde', title: 'Contemporary', description: 'Contemporary dance is a style that combines jazz, ballet, and modern dance. Its said that the first ever contemporary choreographer was Merce Cunningham. Contemporary can be many different styles, but most of the time it is melancholy and or intense. It involves a lot of technique usage. It is very popular among the competitive dance scene today.', song: 'assets/songs/contemporary.mp3'},
    {id: 'hiphop', color: '#f5cbd9', title: 'Hip-Hop', description: 'Hip hop dance made an entrance in the 1970s. It originated from African tribe dances, but did not become popular until way after the time it was started. Hip hop involves sharp movements. There are many styles of hip hop that include breaking, popping, locking, and more.', song: 'assets/songs/hiphop.mp3'},
  ];

  constructor() { }

  ngOnInit() {
    this.audio = new Audio(this.danceGenres[0].song);
    this.audio.loop = true; // Loop the audio if needed
    this.audio.volume = 0;  // Start at 0 volume for fade-in effect
  }

  playMusic(songUrl: string) {
    if (this.isPlaying) {
      this.stopMusic();
    } else {
      this.startMusicWithFadeIn(songUrl);
    }
  }

  startMusicWithFadeIn(songUrl: string): void {
    this.audio = new Audio(songUrl);
    this.audio.play();
    this.isPlaying = true;

    // Gradually increase volume
    let volume = 0;
    const maxVolume = 1; // Full volume
    const fadeDuration = 3000; // Fade-in duration in milliseconds
    const step = 0.1; // Volume increment
    const interval = fadeDuration / (maxVolume / step);

    // Clear any existing intervals to prevent conflicts
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
    }

    this.fadeInterval = setInterval(() => {
      if (volume < maxVolume) {
        volume += step;
        this.audio.volume = Math.min(volume, maxVolume); // Cap at maxVolume
      } else {
        clearInterval(this.fadeInterval); // Stop when max volume is reached
      }
    }, interval);
  }

  stopMusic(): void {
    // Pause the audio and reset volume immediately
    this.audio.pause();
    this.audio.volume = 0;
    this.isPlaying = false;

    // Clear any fade-in interval
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
    }
  }

}
