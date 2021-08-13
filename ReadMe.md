<h1><center>kasper-design</center></h1>
<hr />
<center>Use styled-components to build React-Components</center>
<center>I will update this package continuously</center>
<center>demo: 
<a href="https://neko12377.github.io/kasper-design/?path=/story/homepage-welcome--welcome-welcome" style="color: #cb3837; text-decoration: none; font-weight: 900">
GO</a> 
</center>
<h2>Recap</h2>
<hr />
<ol start="1">
<li><a href="#install" style="color: #cb3837; text-decoration: none; font-weight: 900">Install</a></li>
<li><a href="#atom" style="color: #cb3837; text-decoration: none; font-weight: 900">Atom</a>
<ul>
<li>ButtonWithRef</li>
<li>FileUploader</li>
<li>MinuteTimer</li>
<li>PopUpModel</li>
<li>ProcessBar</li>
</ul>
</li>
<li><a href="#molecule" style="color: #cb3837; text-decoration: none; font-weight: 900">Molecule</a>
<ul>
<li>
CopyButton
</li>
</ul>
</li>
<li><a href="#hook" style="color: #cb3837; text-decoration: none; font-weight: 900">Hook</a></li>
</ol>
<hr />
<h3 id="install"><center>Install</center></h3>
<hr />
<div style="height: 10px">Install with npm:</div>
<br />
<div style="height: 10px">
<code>npm install kasper-design</code>
</div>
<br />
<div style="height: 10px">Install with yarn:</div>
<br />
<div style="height: 10px">
<code>yarn add kasper-design</code>
</div>
<h3 id="atom"><center>Atom</center></h3>
<hr />
<table>
<tr>
<th>Components</th>
<th>Properties</th>
</tr>
<tr>
<td>ButtonWithRef</td>
<td>
<ul>
<li>children?: React.ReactNode</li>
<li>handlePress?: () => void</li>
<li>handleUp?: () => void</li>
<li>handleLeave?: () => void</li>
<li>handleHover?: () => void</li>
<li>handleClick?: () => void;</li>
</ul>
</td>
</tr>
<tr>
<td>FileUploader</td>
<td></td>
</tr>
<tr>
<td>MinuteTimer</td>
<td>
<ul>
<li>leftTime: string</li>
</ul>
</td>
</tr>
<tr>
<td>PopUpModel</td>
<td>
<ul>
<li>width?: number</li>
<li>height?: number</li>
<li>backgroundColor?: string</li>
<li>left?: number</li>
<li>top?: number</li>
</ul>
</td>
</tr>
<tr>
<td>ProcessBar</td>
<td>
<ul>
<li>width?: number</li>
<li>stepSigns?: string[]</li>
<li>descriptions?: string[]</li>
<li>fontSize?: number</li>
<li>stepSignSize?: number</li>
<li>processingStepColor?: string</li>
<li>notProcessedYetStepColor?: string</li>
<li>currentProcessingStep?: number</li>
<li>barHeight?: number</li>
</ul>
</td>
</tr>
</table>
<h3 id="molecule"><center>Molecule</center></h3>
<hr />
<table>
<tr>
<th>Components</th>
<th>Properties</th>
</tr>
<tr>
<td>CopyButton</td>
<td>
<ul>
<li>children?: React.ReactNode</li>
<li>targetRef: React.MutableRefObject&#60any&#62</li>
<li>buttonRef: React.MutableRefObject&#60HTMLButtonElement&#62</li>
</ul>
</td>
</tr>
</table>
<h3 id="hook"><center>Hook</center></h3>
<hr />
<table style="width: 100%">
<tr style="width: 100%">
<th style="width: 30%">name</th>
<th style="width: 70%">functionality</th>
</tr>
<tr>
<td>useWindowResize</td>
<td>listen to window resize</td>
</tr>
<tr>
<td>useDebounce</td>
<td>prevent too many request</td>
</tr>
</table>