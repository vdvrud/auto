// Move the mouse across the screen as a sine wave.
const robot = require('robotjs')
const moment = require('moment')
const { keyboard, Key } = require('@nut-tree/nut-js')
// const kRobot = require('kbm-robot')
let i = 1

const moveKeys = async () => {
	const randomMoves = getRandom(4)
	;(async () => {
		console.log('started')
		await keyboard.pressKey(Key.LeftShift, Key.Backslash)
		for (let i = 0; i < randomMoves; i++) {
			await keyboard.pressKey(Key.Backslash)
		}

		const v = () =>
			new Promise((resolve) => {
				setTimeout(async () => {
					await keyboard.releaseKey(Key.Backslash)
					await keyboard.releaseKey(keyboard.LeftShift)
					await keyboard.pressKey(Key.Enter)

					resolve(true)
					console.log('done ?')
				}, 1000)
			})
		await v()
	})()

	return
}

const getRandom = (max = 10) => {
	const rand = (Math.random() * (max - 1 + 1)) << 0
	// const rand = Math.floor(Math.random() * (1000 - 100) + 100) / 100
	console.log(rand, 'thsi is rand')
	return rand
}
// getRandom()???

const generateRandom = (min, max) => Math.random() * (max - min) + min

const moveMouse = async () => {
	const hour = Number(moment().format('hh')) // returns hour in 1-12 format
	// const minute = moment().format('mm')
	console.log(
		Number(hour),
		new Date(),
		'check hour time',
		new Date().getHours()
	)
	// if (new Date().getHours() > 5) {
	// 	console.log('exited at', moment().format())
	// 	process.exit()
	// }
	// if (hour >= 3 && hour !== 12) {
	// 	console.log('exited at', moment().format())
	// 	process.exit()
	// }
	// Speed up the mouse.
	robot.setMouseDelay(2)
	// contacts-import.service.ts
	// https://gitlab.com/sh-backend/v3-edge-service/-/merge_requests/703
	var twoPI = Math.PI * 2.0
	var screenSize = robot.getScreenSize()
	var height = screenSize.height
	var width = screenSize.width
	console.log(width, 'check', height)
	for (var x = 0; x < width; x++) {
		// let y = height * Math.sin((twoPI * x) / width) + height
		let y = generateRandom(6, height)
		// if (x % 2 === 0) {
		// 	y = height * Math.sin((twoPI * x) / width) + height
		// } else {
		// y = height * ((x - generateRandom(6, 600)) / width) + height
		// }
		robot.moveMouse(x, y)
	}

	// robot.setMouseDelay(0.5)
	// robot.moveMouse(width / 2, height / 2)

	// robot.scrollMouse(100, 100)

	// await moveKeys()
	// robot.typeString('vdv,vdv, is this it ? is this it ?')
	i++
	// if (i < 550) {
	setTimeout(() => {
		moveMouse()
	}, getRandom() * 1000)
	// } else {
	// 	console.log('ended on ', new Date())
	// }
}

moveMouse()

// {
// 	pageHeaderBannerMessage && (
// 		<div className='mr-2 ml-2'>
// 			<Banner
// 				pageHeaderBannerMessage={pageHeaderBannerMessage}
// 				ctaURL={ctaURL}
// 				ctaText={ctaText}
// 				style={{
// 					position: 'sticky',
// 					top: 0,
// 					zIndex: 999
// 				}}
// 				target={target}
// 			/>
// 		</div>
// 	)
// }

// const { t, pageHeaderBannerMessage, ctaURL, ctaText, target } = this.props
