let audio = new Audio();
let playing = false;
let tracks = ['Kastra - Fool For You.mp3', 'music2.mp3'];
let currentTrackIndex = 0;

function playMusic(src, trackName) {
    if (audio.src !== src) {
        audio.src = src;
        audio.play();
        playing = true;
        document.getElementById('play-pause').innerHTML = '&#10074;&#10075;'; // 停止图标
        document.getElementById('track-name').textContent = trackName;
    } else {
        togglePlayPause();
    }
}

function togglePlayPause() {
    if (playing) {
        audio.pause();
        document.getElementById('play-pause').innerHTML = '&#9658;'; // 播放图标
    } else {
        audio.play();
        document.getElementById('play-pause').innerHTML = '&#10074;&#10075;'; // 停止图标
    }
    playing = !playing;
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    playMusic(tracks[currentTrackIndex], '音乐名称 ' + (currentTrackIndex + 1));
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    playMusic(tracks[currentTrackIndex], '音乐名称 ' + (currentTrackIndex + 1));
}

audio.addEventListener('timeupdate', () => {
    let currentTime = formatTime(audio.currentTime);
    let duration = formatTime(audio.duration);
    document.getElementById('current-time').textContent = currentTime;
    document.getElementById('duration').textContent = duration;
    document.getElementById('progress-bar').value = (audio.currentTime / audio.duration) * 100;
});

document.getElementById('progress-bar').addEventListener('input', (event) => {
    audio.currentTime = (event.target.value / 100) * audio.duration;
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}