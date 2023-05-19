import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText } from "reactstrap";

const AboutUs = () => {
	const aboutUs = [
		{
			id: 1,
			name: "James Lee",
			role: "Project Manager",
			image: "picture.url",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris vitae elit cursus lacinia. Ut bibendum elit id mi luctus, sed aliquam lectus varius. Proin consequat neque vel justo rutrum, vitae pharetra leo condimentum. Sed at justo ullamcorper, aliquet erat at, lacinia sapien. Nunc varius felis vitae ex rhoncus, nec ultrices diam commodo. Donec id lacinia elit. Nam vehicula tellus ut ullamcorper efficitur. Nulla facilisi. Integer in ligula sed risus lobortis dictum. Suspendisse a purus ut ipsum luctus lacinia et at justo. Suspendisse potenti. Proin iaculis metus vitae leo ultrices sollicitudin. Curabitur vulputate lectus non felis congue, eget condimentum velit finibus.",
		},
		{
			id: 2,
			name: "Jake Dahlgren",
			role: "Product Manager",
			image: "picture.url",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris vitae elit cursus lacinia. Ut bibendum elit id mi luctus, sed aliquam lectus varius. Proin consequat neque vel justo rutrum, vitae pharetra leo condimentum. Sed at justo ullamcorper, aliquet erat at, lacinia sapien. Nunc varius felis vitae ex rhoncus, nec ultrices diam commodo. Donec id lacinia elit. Nam vehicula tellus ut ullamcorper efficitur. Nulla facilisi. Integer in ligula sed risus lobortis dictum. Suspendisse a purus ut ipsum luctus lacinia et at justo. Suspendisse potenti. Proin iaculis metus vitae leo ultrices sollicitudin. Curabitur vulputate lectus non felis congue, eget condimentum velit finibus.",
		},
		{
			id: 3,
			name: "Mark Nou",
			role: "Design Lead",
			image: "picture.url",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris vitae elit cursus lacinia. Ut bibendum elit id mi luctus, sed aliquam lectus varius. Proin consequat neque vel justo rutrum, vitae pharetra leo condimentum. Sed at justo ullamcorper, aliquet erat at, lacinia sapien. Nunc varius felis vitae ex rhoncus, nec ultrices diam commodo. Donec id lacinia elit. Nam vehicula tellus ut ullamcorper efficitur. Nulla facilisi. Integer in ligula sed risus lobortis dictum. Suspendisse a purus ut ipsum luctus lacinia et at justo. Suspendisse potenti. Proin iaculis metus vitae leo ultrices sollicitudin. Curabitur vulputate lectus non felis congue, eget condimentum velit finibus.",
		},
		{
			id: 4,
			name: "Felix Lopez",
			role: "Technology Lead",
			image: "picture.url",
			about:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris vitae elit cursus lacinia. Ut bibendum elit id mi luctus, sed aliquam lectus varius. Proin consequat neque vel justo rutrum, vitae pharetra leo condimentum. Sed at justo ullamcorper, aliquet erat at, lacinia sapien. Nunc varius felis vitae ex rhoncus, nec ultrices diam commodo. Donec id lacinia elit. Nam vehicula tellus ut ullamcorper efficitur. Nulla facilisi. Integer in ligula sed risus lobortis dictum. Suspendisse a purus ut ipsum luctus lacinia et at justo. Suspendisse potenti. Proin iaculis metus vitae leo ultrices sollicitudin. Curabitur vulputate lectus non felis congue, eget condimentum velit finibus.",
		},
	];
	return (
		<body className="bg-black grid grid-cols-4 gap-8 h-screen w-screen pt-40 px-4">
			
			{aboutUs.map(({ aboutUs, id, name, role, image, about }) => {
				return (
					<Card className="bg-transparent">
						<CardBody
							className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
							key={id}>
							<CardTitle className="text-red-500 text-xl " tag="h5">
								{name}
							</CardTitle>
							<CardSubtitle className="text-white" tag="h6">
								{role}
							</CardSubtitle>
						</CardBody>
						<img
							alt="Dev Picture"
							src={image}
							width="100%"
						/>
						<CardBody>
							<CardText>
								{about}
							</CardText>
							<CardLink href="#">GitHub</CardLink>
							<CardLink href="#">LinkedIn</CardLink>
						</CardBody>
					</Card>
				);
			})}
		</body>
	);
};

export default AboutUs;
